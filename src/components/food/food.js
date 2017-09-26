import carbutton from '@/components/carbutton/carbutton.vue'
import assess from '@/components/assess/assess.vue'

export default {
	props: {
		food: {
			type: Object,
			default: {}
		},
		tpl: {
			type: String
		}
  },
	components: {
		carbutton,
		assess
	},
	methods: {
		hideFooder() {
			this.$emit('fooder-change', false)
		}
	}
}