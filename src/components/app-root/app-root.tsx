import { Component, h } from '@stencil/core';

@Component({
    tag: 'app-root',
    shadow: false,
})
export class AppRoot {
    render() {
        return (
            <div>
                <header class="bg-purple-700 text-white h-14 flex items-center shadow">
                    <h1 class="text-2xl font-medium p-3">Stencil App Starter</h1>
                </header>

                <main>
                    <stencil-router>
                        <stencil-route-switch scrollTopOffset={0}>
                            <stencil-route url="/" component="app-home" exact={true} />
                            <stencil-route url="/profile/:name" component="app-profile" />
                        </stencil-route-switch>
                    </stencil-router>
                </main>
            </div>
        );
    }
}
