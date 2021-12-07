import { Component, h } from '@stencil/core';

@Component({
    tag: 'app-home',
    shadow: false,
})
export class AppHome {
    render() {
        return (
            <div class="p-3">
                <p class="my-4">
                    Welcome to the Stencil App Starter. You can use this starter to build entire apps all with web components using Stencil! Check out our docs on{' '}
                    <a href="https://stenciljs.com">stenciljs.com</a> to get started.
                </p>

                <stencil-route-link class="group inline-block transform hover:translate-y-1 transition-all" url="/profile/stencil">
                    <button class="bg-purple-700 text-white m-2 text-sm font-bold tracking-wider uppercase py-4 px-5 border-none rounded-sm outline-none shadow-lg cursor-pointer group-hover:shadow-md transition-all">
                        Profile page
                    </button>
                </stencil-route-link>
            </div>
        );
    }
}
