/* Summary: Contains a bar fixed at the bottom of the page with a transparent background with a blur effect.
It has two buttons: Contact button that directs to the contact page and Pay button that directs to the payment page, styled with a blue background and a shine animation effect.
*/
Vue.component("bottom_bar_component_1723921196", {
    template: `
    <section id="bottom-bar-component" style="min-height: 70px" class="fixed bottom-0 z-30 w-full lg:w-1/2 bg-pink-300 bg-opacity-30 backdrop-filter backdrop-blur-lg rounded-t-2xl shadow-lg">
        <div id="bottom-bar-component-content" class="w-full max-w-xl mx-auto px-6 py-4">
            <div id="action-buttons" class="flex space-x-6 justify-center">
                <a id="contact-button" class="btn flex items-center justify-center w-1/2 h-14 p-3 text-purple-900 bg-white bg-opacity-20 rounded-lg hover:bg-opacity-30 border border-purple-300 border-opacity-50 shadow-lg transition duration-200 ease-in-out" href="contact.html">Contact</a>
                <a id="pay-button" class="btn flex items-center justify-center w-1/2 h-14 p-3 text-white bg-gradient-to-r from-pink-500 to-purple-600 rounded-lg hover:from-pink-600 hover:to-purple-700 shadow-lg transition duration-200 ease-in-out">Pay</a>
            </div>
        </div>
    </section>
    `,
    data() {
        return {
            expanded:false,
            tab:null
        }
    },
});
