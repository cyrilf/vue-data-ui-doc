<script setup>
import { ref, computed, onMounted, defineAsyncComponent } from "vue";
import { useMainStore } from "../stores";
import { useMakerStore } from "../stores/maker"
import Tooltip from "../components/FlexibleTooltip.vue";
import ConfirmCopy from "../components/ConfirmCopy.vue";

const MakerXy = defineAsyncComponent(() => import('../components/maker/MakerXy.vue'));
const MakerDonut = defineAsyncComponent(() => import('../components/maker/MakerDonut.vue'));
const MakerWaffle = defineAsyncComponent(() => import('../components/maker/MakerWaffle.vue'));
const MakerRadar = defineAsyncComponent(() => import('../components/maker/MakerRadar.vue'));
const MakerGauge = defineAsyncComponent(() => import('../components/maker/MakerGauge.vue'));
const MakerOnion = defineAsyncComponent(() => import('../components/maker/MakerOnion.vue'));
const MakerQuadrant = defineAsyncComponent(() => import('../components/maker/MakerQuadrant.vue'));
const MakerWheel = defineAsyncComponent(() => import('../components/maker/MakerWheel.vue'));
const MakerTiremarks = defineAsyncComponent(() => import('../components/maker/MakerTiremarks.vue'));
const MakerChestnut = defineAsyncComponent(() => import('../components/maker/MakerChestnut.vue'));
const MakerVerticalBar = defineAsyncComponent(() => import('../components/maker/MakerVerticalBar.vue'));
const MakerHeatmap = defineAsyncComponent(() => import('../components/maker/MakerHeatmap.vue'));
const MakerSparkline = defineAsyncComponent(() => import('../components/maker/MakerSparkline.vue'));
const MakerSparkStackbar = defineAsyncComponent(() => import('../components/maker/MakerSparkStackbar.vue'));
const MakerSparkbar = defineAsyncComponent(() => import('../components/maker/MakerSparkbar.vue'));
const MakerSparkHistogram = defineAsyncComponent(() => import('../components/maker/MakerSparkHistogram.vue'));
const MakerDonutEvolution = defineAsyncComponent(() => import('../components/maker/MakerDonutEvolution.vue'));
const MakerRings = defineAsyncComponent(() => import('../components/maker/MakerRings.vue'));
const MakerScatter = defineAsyncComponent(() => import('../components/maker/MakerScatter.vue'));
const MakerPyramid = defineAsyncComponent(() => import('../components/maker/MakerPyramid.vue'));
const MakerMoodRadar = defineAsyncComponent(() => import('../components/maker/MakerMoodRadar.vue'));
const MakerRelationCircle = defineAsyncComponent(() => import('../components/maker/MakerRelationCircle.vue'));
const MakerThermometer = defineAsyncComponent(() => import('../components/maker/MakerThermometer.vue'));
const Maker3dBar = defineAsyncComponent(() => import('../components/maker/Maker3dBar.vue'));
const MakerNestedDonuts = defineAsyncComponent(() => import('../components/maker/MakerNestedDonuts.vue'));
const MakerSparkgauge = defineAsyncComponent(() => import('../components/maker/MakerSparkgauge.vue'));
const MakerGalaxy = defineAsyncComponent(() => import('../components/maker/MakerGalaxy.vue'));
const MakerKpi = defineAsyncComponent(() => import('../components/maker/MakerKpi.vue'));
const MakerStripPlot = defineAsyncComponent(() => import('../components/maker/MakerStripPlot.vue'));
const MakerVueUiWordCloud = defineAsyncComponent(() => import('../components/maker/MakerVueUiWordCloud.vue'));
const MakerFlow = defineAsyncComponent(() => import('../components/maker/MakerFlow.vue'));
const MakerCarouselTable = defineAsyncComponent(() => import('../components/maker/MakerCarouselTable.vue'));
const MakerPcp = defineAsyncComponent(() => import('../components/maker/MakerPcp.vue'));
const MakerGizmo = defineAsyncComponent(() => import('../components/maker/MakerGizmo.vue'));
const MakerStackbar = defineAsyncComponent(() => import('../components/maker/MakerVueUiStackbar.vue'));

const store = useMainStore();
const makerStore = useMakerStore();

const translations = computed(() => {
    return store.translations;
})

const makerTranslations = computed(() => {
    return makerStore.translations;
})

const isDarkMode = computed(() => {
    return store.isDarkMode;
})

const isCopy = computed(() => store.isCopy);

const options = ref([
    { name: "VueUiXy", icon: "chartLine", thumb: new URL('../assets/thumb_xy_light.png', import.meta.url).href},
    { name: "VueUiDonut", icon: "chartDonut", thumb: new URL('../assets/thumb_donut_light.png', import.meta.url).href},
    { name: "VueUiWaffle", icon: "chartWaffle", thumb: new URL('../assets/thumb_waffle_light.png', import.meta.url).href},
    { name: "VueUiRadar", icon: "chartRadar", thumb: new URL('../assets/thumb_radar_light.png', import.meta.url).href},
    { name: "VueUiGauge", icon: "chartGauge", thumb: new URL('../assets/thumb_gauge_light.png', import.meta.url).href},
    { name: "VueUiOnion", icon: "chartOnion", thumb: new URL('../assets/thumb_onion_light.png', import.meta.url).href},
    { name: "VueUiQuadrant", icon: "chartQuadrant", thumb: new URL('../assets/thumb_quadrant_light.png', import.meta.url).href},
    { name: "VueUiWheel", icon: "chartWheel", thumb: new URL('../assets/thumb_wheel_light.png', import.meta.url).href},
    { name: "VueUiTiremarks", icon: "chartTiremarks", thumb: new URL('../assets/thumb_tiremarks_light.png', import.meta.url).href},
    { name: "VueUiChestnut", icon: "chartChestnut", thumb: new URL('../assets/thumb_chestnut_light.png', import.meta.url).href},
    { name: "VueUiVerticalBar", icon: "chartVerticalBar", thumb: new URL('../assets/thumb_vertical_bar_light.png', import.meta.url).href},
    { name: "VueUiHeatmap", icon: "chartHeatmap", thumb: new URL('../assets/thumb_heatmap_light.png', import.meta.url).href},
    { name: "VueUiStripPlot", icon: "chartStripPlot", thumb: new URL('../assets/thumb_strip_plot_light.png', import.meta.url).href},
    { name: "VueUiSparkline", icon: "chartSparkline", thumb: new URL('../assets/thumb_sparkline_light.png', import.meta.url).href},
    { name: "VueUiSparkStackbar", icon: "chartSparkStackbar", thumb: new URL('../assets/thumb_stackbar_light.png', import.meta.url).href},
    { name: "VueUiSparkbar", icon: "chartSparkbar", thumb: new URL('../assets/thumb_sparkbar_light.png', import.meta.url).href},
    { name: "VueUiSparkHistogram", icon: "chartSparkHistogram", thumb: new URL('../assets/thumb_histogram_light.png', import.meta.url).href},
    { name: "VueUiDonutEvolution", icon: "chartDonutEvolution", thumb: new URL('../assets/thumb_donut_evolution_light.png', import.meta.url).href},
    { name: "VueUiRings", icon: "chartRings", thumb: new URL('../assets/thumb_rings_light.png', import.meta.url).href},
    { name: "VueUiScatter", icon: "chartScatter", thumb: new URL('../assets/thumb_scatter_light.png', import.meta.url).href},
    { name: "VueUiAgePyramid", icon: "chartAgePyramid", thumb: new URL('../assets/thumb_age_pyramid_light.png', import.meta.url).href},
    { name: "VueUiMoodRadar", icon: "chartMoodRadar", thumb: new URL('../assets/thumb_mood_radar_light.png', import.meta.url).href},
    { name: "VueUiRelationCircle", icon: "chartRelationCircle", thumb: new URL('../assets/thumb_relation_circle_light.png', import.meta.url).href},
    { name: "VueUiThermometer", icon: "chartThermometer", thumb: new URL('../assets/thumb_thermometer_light.png', import.meta.url).href},
    { name: "VueUi3dBar", icon: "chart3dBar", thumb: new URL('../assets/thumb_3d_bar_light.png', import.meta.url).href},
    { name: "VueUiNestedDonuts", icon: "chartNestedDonuts", thumb: new URL('../assets/thumb_nested_donuts_light.png', import.meta.url).href},
    { name: "VueUiSparkgauge", icon: "chartGauge", thumb: new URL('../assets/thumb_sparkgauge_light.png', import.meta.url).href},
    { name: "VueUiGalaxy", icon: "chartGalaxy", thumb: new URL('../assets/thumb_galaxy_light.png', import.meta.url).href},
    { name: "VueUiWordCloud", icon: "chartWordCloud", thumb: new URL('../assets/thumb_word_cloud_light.png', import.meta.url).href},
    { name: "VueUiFlow", icon: "chartFlow", thumb: new URL('../assets/thumb_flow_light.png', import.meta.url).href},
    { name: "VueUiParallelCoordinatePlot", icon: "chartParallelCoordinatePlot", thumb: new URL('../assets/thumb_pcp_light.png', import.meta.url).href},
    { name: "VueUiKpi", icon: "kpiBox", thumb: ""},
    { name: "VueUiCarouselTable", icon: "carouselTable", thumb: new URL('../assets/thumb_carousel_table_light.png', import.meta.url).href},
    { name: "VueUiGizmo", icon: "battery", thumb: new URL('../assets/thumb_gizmo_light.png', import.meta.url).href},
    { name: "VueUiStackbar", icon: "chartStackbar", thumb: new URL('../assets/thumb_stack_bar_light.png', import.meta.url).href},
])

const selectedChart = ref({name: "VueUiXy", icon: "chartLine"});

onMounted(() => {
    if(!localStorage.currentChart) {
        localStorage.setItem('currentChart', 'VueUiXy')
    } else {
        selectedChart.value = options.value.find(item => item.name === localStorage.currentChart)
    }
})

function saveSelectedChartToLocalStorage() {
    localStorage.currentChart = selectedChart.value.name;
}

function selectChart(opt) {
    selectedChart.value = opt;
    saveSelectedChartToLocalStorage()
}

</script>

<template>
    <ConfirmCopy />

    <div class="w-full max-w-[1400px] mx-auto overflow-visible min-h-[3000px]">
        <div class="w-full flex flex-row gap-4 place-items-center justify-center my-12">
            <h1 class="text-[64px] sm:text-[96px] text-center">{{ translations.menu.chartBuilder[store.lang] }}</h1>
        </div>

        <div class="w-full max-w-[400px] flex flex-row flex-wrap gap-2 mx-auto justify-center my-12">
            <div v-for="(option, i) in options" :class="`relative`">
                <Tooltip :content="option.name" width="w-fit min-w-[120px]" delay="delay-150" :img="option.thumb">
                    <button @click="selectChart(option)" :class="`border p-2 rounded hover:bg-[#42d39233] transition-colors ${selectedChart.name === option.name ? 'border-app-blue bg-[#6376DD33] hover:bg-[#6376DD33] shadow-md' : 'border-gray-400 hover:border-app-green '}`">
                        <VueUiIcon :name="option.icon" :stroke="selectedChart.name === option.name ? '#6376DD' : isDarkMode ? '#AAAAAA' : '#1A1A1A'"></VueUiIcon>
                    </button>
                </Tooltip>
            </div>
        </div>

        <div class="w-full mt-6">
            <div class="flex flex-row gap-3 place-items-end justify-center">
                <div class="flex flex-col gap-2">
                    <label for="chartType">{{ makerTranslations.labels.selectChartType[store.lang] }}</label>
                    <select @change="saveSelectedChartToLocalStorage" style="outline:1px solid #5f8bee !important;margin-left:1px" id="chartType" v-model="selectedChart" class="h-[40px] px-6">
                        <option class="text-left" v-for="option in options" :value="option">{{ option.name }}</option>
                    </select>
                </div>
                <div style="margin-bottom:0.3px">
                    <VueUiIcon :size="38" :stroke-width="0.8" :name="selectedChart.icon" :stroke="isDarkMode ? '#5f8bee' : '#1A1A1A'"/>
                </div>
            </div>

                <div class="font-bold flex flex-col sm:flex-row gap-4 justify-center place-items-center my-12 bg-gray-200 dark:bg-[#FFFFFF10] w-fit mx-auto p-4 rounded-full">
                    <div class="py-2 px-4 rounded-full bg-gradient-to-r from-[#42d39210] to-[#42d39230] shadow-md">1. {{ makerTranslations.steps.one[store.lang] }}</div>
                    <div class="hidden sm:block">
                        <VueUiIcon name="arrowRight" stroke="#42d392" class="drop-shadow-lg" />
                    </div>
                    <div class="sm:hidden">
                        <VueUiIcon name="arrowBottom" stroke="#42d392" class="drop-shadow-lg"/>
                    </div>
                    <div class="py-2 px-4 rounded-full bg-gradient-to-r from-[#42d39230] to-[#42d39250] shadow-md">2. {{ makerTranslations.steps.two[store.lang] }}</div>
                    <div class="hidden sm:block">
                        <VueUiIcon name="arrowRight" stroke="#42d392" class="drop-shadow-lg"/>
                    </div>
                    <div class="sm:hidden">
                        <VueUiIcon name="arrowBottom" stroke="#42d392" class="drop-shadow-lg"/>
                    </div>
                    <div class="py-2 px-4 rounded-full bg-gradient-to-r from-[#42d39250] to-[#42d39270]  shadow-md">3. {{ makerTranslations.steps.three[store.lang] }}</div>
                </div>

        </div>
        
        <Transition name="fade">
            <MakerXy v-if="selectedChart.name === 'VueUiXy'"/>
        </Transition>
        <Transition name="fade">
            <MakerDonut v-if="selectedChart.name === 'VueUiDonut'"/>
        </Transition>
        <Transition name="fade">
            <MakerWaffle v-if="selectedChart.name === 'VueUiWaffle'"/>
        </Transition>
        <Transition name="fade">
            <MakerRadar v-if="selectedChart.name === 'VueUiRadar'"/>
        </Transition>
        <Transition name="fade">
            <MakerGauge v-if="selectedChart.name === 'VueUiGauge'"/>
        </Transition>
        <Transition name="fade">
            <MakerOnion v-if="selectedChart.name === 'VueUiOnion'"/>
        </Transition>
        <Transition name="fade">
            <MakerQuadrant v-if="selectedChart.name === 'VueUiQuadrant'"/>
        </Transition>
        <Transition name="fade">
            <MakerWheel v-if="selectedChart.name === 'VueUiWheel'"/>
        </Transition>
        <Transition name="fade">
            <MakerTiremarks v-if="selectedChart.name === 'VueUiTiremarks'"/>
        </Transition>
        <Transition name="fade">
            <MakerChestnut v-if="selectedChart.name === 'VueUiChestnut'"/>
        </Transition>
        <Transition name="fade">
            <MakerVerticalBar v-if="selectedChart.name === 'VueUiVerticalBar'"/>
        </Transition>
        <Transition name="fade">
            <MakerHeatmap v-if="selectedChart.name === 'VueUiHeatmap'"/>
        </Transition>
        <Transition name="fade">
            <MakerStripPlot v-if="selectedChart.name === 'VueUiStripPlot'" />
        </Transition>
        <Transition name="fade">
            <MakerSparkline v-if="selectedChart.name === 'VueUiSparkline'"/>
        </Transition>
        <Transition name="fade">
            <MakerSparkStackbar v-if="selectedChart.name === 'VueUiSparkStackbar'"/>
        </Transition>
        <Transition name="fade">
            <MakerSparkbar v-if="selectedChart.name === 'VueUiSparkbar'"/>
        </Transition>
        <Transition name="fade">
            <MakerSparkHistogram v-if="selectedChart.name === 'VueUiSparkHistogram'"/>
        </Transition>
        <Transition name="fade">
            <MakerDonutEvolution v-if="selectedChart.name === 'VueUiDonutEvolution'"/>
        </Transition>
        <Transition name="fade">
            <MakerRings v-if="selectedChart.name === 'VueUiRings'"/>
        </Transition>
        <Transition name="fade">
            <MakerScatter v-if="selectedChart.name === 'VueUiScatter'"/>
        </Transition>
        <Transition name="fade">
            <MakerPyramid v-if="selectedChart.name === 'VueUiAgePyramid'"/>
        </Transition>
        <Transition name="fade">
            <MakerMoodRadar v-if="selectedChart.name === 'VueUiMoodRadar'"/>
        </Transition>
        <Transition name="fade">
            <MakerRelationCircle v-if="selectedChart.name === 'VueUiRelationCircle'"/>
        </Transition>
        <Transition name="fade">
            <MakerThermometer v-if="selectedChart.name === 'VueUiThermometer'" />
        </Transition>
        <Transition name="fade">
            <Maker3dBar v-if="selectedChart.name === 'VueUi3dBar'" />
        </Transition>
        <Transition name="fade">
            <MakerNestedDonuts v-if="selectedChart.name === 'VueUiNestedDonuts'" />
        </Transition>
        <Transition name="fade">
            <MakerSparkgauge v-if="selectedChart.name === 'VueUiSparkgauge'" />
        </Transition>
        <Transition name="fade">
            <MakerGalaxy v-if="selectedChart.name === 'VueUiGalaxy'" />
        </Transition>
        <Transition name="fade">
            <MakerKpi v-if="selectedChart.name === 'VueUiKpi'" />
        </Transition>
        <Transition name="fade">
            <MakerVueUiWordCloud v-if="selectedChart.name === 'VueUiWordCloud'" />
        </Transition>
        <Transition name="fade">
            <MakerFlow v-if="selectedChart.name === 'VueUiFlow'" />
        </Transition>
        <Transition name="fade">
            <MakerPcp v-if="selectedChart.name === 'VueUiParallelCoordinatePlot'" />
        </Transition>
        <Transition name="fade">
            <MakerCarouselTable v-if="selectedChart.name === 'VueUiCarouselTable'" />
        </Transition>
        <Transition name="fade">
            <MakerGizmo v-if="selectedChart.name === 'VueUiGizmo'" />
        </Transition>
        <Transition name="fade">
            <MakerStackbar v-if="selectedChart.name === 'VueUiStackbar'" />
        </Transition>
    </div>
</template>