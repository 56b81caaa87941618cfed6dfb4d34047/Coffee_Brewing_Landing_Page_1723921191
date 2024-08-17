/* Summary: Contains a section with three cards with black background and white text.
  The three cards are side by side and each contains a detail name in bold above a detail value.
*/
Vue.component("page_details_cards_component_1723921196", {
    template: `
    <section id="page-details-cards-component" class="py-8 bg-white">
        <h2 id="details-title" class="text-lg font-semibold mb-5 pl-4">Details</h2>
        <ul id="details-list" class="grid gap-4 min-[480px]:grid-cols-3 text-sm">
            <li id="project-length" class="px-5 py-4 rounded-lg bg-gradient-to-tr from-slate-950 to-slate-800 dark:from-slate-800/80 dark:to-slate-900">
                <div class="font-medium text-slate-200 text-slate-400">Expertly Roasted</div>
                <div class="text-slate-400">Our beans are carefully selected and roasted to perfection, ensuring a rich and flavorful cup every time.</div>
            </li>
            <li id="start-date" class="px-5 py-4 rounded-lg bg-gradient-to-tr from-slate-950 to-slate-800 dark:from-slate-800/80 dark:to-slate-900">
                <div class="font-medium" id="start-date-des-1 text-slate-200 text-slate-400">Ethically Sourced</div>
                <time class="text-slate-400" id="start-time-des-1">We partner directly with farmers to bring you sustainably grown, fair-trade coffee from around the world.</time>
            </li>
            <li id="end-date" class="px-5 py-4 rounded-lg bg-gradient-to-tr from-slate-950 to-slate-800 dark:from-slate-800/80 dark:to-slate-900">
                <div class="font-medium" id="end-date-des-1 text-slate-200 text-slate-400">Brewing Innovation</div>
                <time class="text-slate-400" id="end-time-des-1">Discover our cutting-edge brewing techniques and equipment, designed to elevate your coffee experience.</time>
            </li>
        </ul>
    </section>
    `,
    data() {
        return {
            expanded: false,
            tab: null,
        };
    },
});

