<template>
    <nav class="transition duration-300 ease-in-out z-20 fixed w-full" :class="{'bg-white shadow-md': !view.atTopOfPage, 'bg-gray-800': view.atTopOfPage}">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-36">
            <div class="flex items-center justify-between h-16">
                <div class="flex items-center">
                    <div class="flex-shrink-0">
                        <img class="h-8 w-8" src="https://tailwindui.com/img/logos/workflow-mark-on-dark.svg" alt="Workflow logo">
                    </div>

                    <div class="hidden md:block">
                        <div class="ml-10 flex items-baseline">
                            <a href="#" class="px-3 py-2 border-b-2 text-sm font-medium text-white focus:outline-none focus:text-white focus:bg-gray-700" :class="{'border-indigo-600 text-gray-700': !view.atTopOfPage, 'bg-gray-900 border-transparent rounded-md': view.atTopOfPage}">Color Picker</a>
                        </div>
                    </div>
                </div>

                <!-- <div class="hidden md:block">
                    <div class="ml-4 flex items-center md:ml-6">
                        <button class="p-1 border-2 border-transparent text-gray-400 rounded-full hover:text-white focus:outline-none focus:text-white focus:bg-gray-700" aria-label="Notifications">
                            <svg class="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                            </svg>
                        </button>

                        Profile dropdown
                        <div class="ml-3 relative">
                            <div>
                                <button class="max-w-xs flex items-center text-sm rounded-full text-white focus:outline-none focus:shadow-solid" id="user-menu" aria-label="User menu" aria-haspopup="true">
                                    <img class="h-8 w-8 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="">
                                </button>
                            </div>

                            
                                Profile dropdown panel, show/hide based on dropdown state.

                                Entering: "transition ease-out duration-100"
                                From: "transform opacity-0 scale-95"
                                To: "transform opacity-100 scale-100"
                                Leaving: "transition ease-in duration-75"
                                From: "transform opacity-100 scale-100"
                                To: "transform opacity-0 scale-95"
                           
                            <div class="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg">
                                <div class="py-1 rounded-md bg-white shadow-xs" role="menu" aria-orientation="vertical" aria-labelledby="user-menu">
                                    <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Your Profile</a>

                                    <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Settings</a>

                                    <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Sign out</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> -->

                <div class="-mr-2 flex md:hidden">
                    <!-- Mobile menu button -->
                    <button @click="mobileIsOpen = !mobileIsOpen" class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white">
                        <svg class="h-6 w-6" :class="{'hidden': mobileIsOpen, 'block': !mobileIsOpen}" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>

                        <svg class="h-6 w-6" :class="{'hidden': !mobileIsOpen, 'block': mobileIsOpen}" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>

        <div class="md:hidden" v-bind:class="{ 'block': mobileIsOpen, 'hidden': !mobileIsOpen }">
            <div class="px-2 pt-2 pb-3 sm:px-3">
                <a href="#" class="block px-3 py-2 border-l-2 text-base font-medium text-white focus:outline-none focus:text-white focus:bg-gray-700" :class="{'border-indigo-600 text-gray-700 bg-gray-100': !view.atTopOfPage, 'bg-gray-900 border-transparent rounded-md': view.atTopOfPage}">Color Picker</a>
            </div>

            <!-- <div class="pt-4 pb-3 border-t border-gray-700">
                <div class="flex items-center px-5">
                    <div class="flex-shrink-0">
                        <img class="h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="">
                    </div>

                    <div class="ml-3">
                        <div class="text-base font-medium leading-none text-white">Tom Cook</div>

                        <div class="mt-1 text-sm font-medium leading-none text-gray-400">tom@example.com</div>
                    </div>
                </div>

                <div class="mt-3 px-2">
                    <a href="#" class="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700">Your Profile</a>

                    <a href="#" class="mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700">Settings</a>

                    <a href="#" class="mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700">Sign out</a>
                </div>
            </div> -->
        </div>
    </nav>
</template>

<script>
export default {
    data() {
        return  {
            mobileIsOpen: false,
            view: {
                atTopOfPage: true
            }
        }
    },
    beforeMount() {
        window.addEventListener('scroll', this.handleScroll)
    },
    methods: {
        handleScroll() {
            if (window.pageYOffset > 0) {
                if (this.view.atTopOfPage) {
                    this.view.atTopOfPage = false
                }
            } else {
                if(!this.view.atTopOfPage) {
                     this.view.atTopOfPage = true
                }
            }
        }
    }
}
</script>