<template>
    <!-- Start Footerbar -->
    <div class="footerbar">
        <footer class="footer">
            <p class="mb-0">© {{ year }} Go2Joy - All Rights Reserved.</p>
        </footer>
    </div>
    <!-- End Footerbar -->
</template>

<script>
    export default {
        name: "Footerbar",
        data: function () {
            return {
                year: new Date().getFullYear()
            }
        }
    }
</script>
