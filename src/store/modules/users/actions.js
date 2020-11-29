import types from '../../mutation-types';

export default {
    async findUsers({commit}, conditions) {
        if (!conditions)
            conditions = {};

        const result = await this.$axios.$get(this.appConfig.api.url + this.appConfig.api.endpoint.users+'?status=1');
        commit(types.USER.USERS, result.data.results);
        return result.data;
    },
    async getUser({commit}, id) {
        const result = await this.$axios.$get(this.appConfig.api.url + this.appConfig.api.endpoint.users+'/'+id);
        commit(types.USER.USER, result.data);
        return result.data;
    }
};