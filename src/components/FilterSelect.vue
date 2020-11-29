<template>
    <div
        class="filter-box"
        :class="transparent ? 'transparent' : ''"
    >
        <div 
            class="dropdown normal"
        >
            <div
                class="dropdown-toggle"
                data-toggle="dropdown"
            >
                <label class="filter-title">
                    {{ label }}
                </label>
                <span
                    v-if="!isKeyword"
                    class="filter-value form-control"
                >
                    {{ selected ? selected.name : placeholder }}
                    <a class="icon-btn">
                        <i
                            class="fa fa-sort-desc"
                            aria-hidden="true"
                        />
                    </a>
                </span>
                <input
                    v-else
                    type="text"
                    class="ip-search filter-value form-control"
                    :placeholder="placeholder"
                    v-model="keyword"
                    :disabled="isDisabled"
                    @input="handlerKeyword(keyword)"
                >
            </div>
            <i
                class="fa fa-times"
                aria-hidden="true"
                @click="clearKeyword()"
                v-if="isKeyword"
            />
            <ul class="dropdown-menu">
                <li
                    class="dropdown-menu-item"
                    v-for="(item, i) in list"
                    :key="i"
                >
                    <a
                        class="dropdown-link"
                        @click="changeItem(item)"
                    >
                        <span class="dropdown-link-title">
                            {{ item.name }}
                        </span>
                    </a>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
    name: "FilterSelect",
    data() {
        return {
            cond: this.condition,
            index: this.keys,
            list: this.data,
            selected: null,
            keyword: '',
            isReset: false
        };
    },
    props: {
        condition: {
            type: String,
            default: ''
        },
        label: {
            type: String,
            default: ''
        },
        transparent: {
            type: Boolean,
            default: false
        },
        isDisabled: {
            type: Boolean,
            default: false
        },
        isKeyword: {
            type: Boolean,
            default: false
        },
        placeholder: {
            type: String,
            default: ''
        },
        data: {
            type: Array,
            default: () => []
        },
        keys: {
            type: Number,
            default: 0
        },
        type: {
            type: Number,
            default: 0
        },
        select: {
            type: Number,
            default: 0
        },
    },
    async created() {
        this.reset();
        if (this.select !== null && this.list && this.list.length){
            this.selected = this.list.find(item => item.value == this.select);
        }
    },
    async mounted() {
    },
    watch: {
        data: function(data) {
            this.list = data;
        },
        keyword: function(keyword) {
            this.search(keyword);
        },
    },
    methods: {
        reset() {
            this.isReset = true;
            this.selected = '';
            this.keyword = '';
        },
        clearKeyword(){
            this.reset();
            this.$emit('input', this.selected, this.reset);
        },
        changeItem(item) {
            this.selected = item;
            this.keyword = this.selected.name;
            this.$emit('input', {item: item, index: this.index, type: this.cond});
            this.$emit('input', {item: item});
        },
        async handlerKeyword(keyword){
            if (this.type){
                clearTimeout(this.timeout);
                this.timeout = setTimeout(async () => {
                    await this.search();
                }, 600);
            }
            else {
                this.$emit('reloadFilterData', keyword);
            }
        },
        async search(keyword){
            this.$emit('reloadFilterData', keyword);
        }
    }
};
</script>

