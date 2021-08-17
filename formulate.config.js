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
    input(context) {
     // console.log(context)
     
      switch (context.classification) {
        
        case "button":
          return "bg-retro-mediumpurple hover:bg-retro-black text-white font-bold py-2 px-4 border-b-4 border-retro-Deeppurple hover:border-black rounded";
        case "select":
            return "w-auto bg-retro-mediumpurple hover:bg-retro-black text-white font-bold py-2 px-4 border-b-4 border-retro-Deeppurple hover:border-black rounded";
        case "box":
            return "w-auto bg-retro-mediumpurple hover:bg-retro-black text-white font-bold py-2 px-4 border-b-4 border-retro-Deeppurple hover:border-black rounded";
        case "text":
              return "border border-gray-400 w-auto bg rounded px-2 py-2 mx-1 mb-1 leading-none focus:border-green-500 outline-none border-box  text-black flex.auto ease-linear transform hover:scale-105 transition duration-500 bg-retro-blue ";

        default:
          return "border border-gray-400 w-auto bg rounded px-2 py-2 mx-1 mb-1 leading-none focus:border-green-500 outline-none border-box  text-black flex.auto ease-linear transform hover:scale-105 transition duration-500 bg-retro-blue ";
      }
    },
    label: 'font-medium text-sm h-6',
    help: 'text-xs mb-1 text-gray-600',
    error: 'text-red-700 text-xs mb-1'
  }
}
