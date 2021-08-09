import { de } from '@braid/vue-formulate-i18n'

export default {
  plugins: [de],
  locale: 'de',
  rules: {
    foobar: ({ value }) => ['foo', 'bar'].includes(value)
  },
  classes: {
    body:'bg-purple-300',
    outer: 'mb-4 m-5 mt-5 my-5 inline-grid',
    input:
      'border border-gray-400 bg rounded px-3 py-2 leading-none focus:border-green-500 outline-none border-box w-full mb-1 text-black flex.auto ease-linear transform hover:scale-105 transition duration-500 bg-retro-blue mx-2',
    label: 'font-medium text-sm h-6',
    help: 'text-xs mb-1 text-gray-600',
    error: 'text-red-700 text-xs mb-1'
  }
}
