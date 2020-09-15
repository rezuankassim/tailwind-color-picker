<template>
    <div class="rounded-lg shadow-md">
        <div class="relative cursor-pointer rounded-lg p-2 bg-white shadow-sm hover:bg-gray-100">
            <div @click="copy" class="flex items-center space-x-4">
                <div class="p-14 rounded-lg shadow-inner" :style="{ backgroundColor: color}"></div>

                <div class="text-gray-700">
                    <p>{{ index }}</p>
                    <p ref="color">{{ color }}</p>
                </div>
            </div>

            <transition
                enter-active-class="transition ease-out duration-100 transform"
                enter-class="opacity-0 scale-95"
                enter-to-class="opacity-100 scale-100"
                leave-active-class="transition ease-in duration-100 transform"
                leave-class="opacity-100 scale-100"
                leave-to-class="opacity-0 scale-95"
            >
                <div v-show="copyShow" class="cursor-default absolute top-0 right-0 flex items-center justify-center rounded-lg space-x-1 bg-gray-100 w-full h-full text-gray-600">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-green-400" viewBox="0 0 24 24" fill="none"><path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>

                    <span>Copied!</span>
                </div>
            </transition>
        </div>
    </div>
</template>

<script>
export default {
    props: ['color', 'index'],
    data() {
        return {
            copyShow: false
        }
    },
    methods: {
        copy() {
            this.selectText(this.$refs.color)
            this.copyShow = true
            setTimeout(() => this.copyShow = false, 2000)
        },
        selectText(element) {
            let range

            if (document.selection) {
                // IE
                range = document.body.createTextRange()
                range.moveToElementText(element)
                range.select()
            } else if (window.getSelection) {
                range = document.createRange()
                range.selectNode(element)
                window.getSelection().removeAllRanges()
                window.getSelection().addRange(range)
            }

            document.execCommand('copy')
            this.clearSelection()
        },
        clearSelection() {
            if (window.getSelection) {
                window.getSelection().removeAllRanges()
            } else if (document.selection) {
                document.selection.empty()
            }
        }
    }
}
</script>

<style>

</style>