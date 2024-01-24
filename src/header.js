export default function Header(props) {
    return (
        <div onClick={props.clickfn}>
            <nav class="bg-white shadow-md border-gray-200 dark:bg-gray-900 dark:border-gray-700">
                <div onclick={props.clickfn} class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <a class="flex items-center space-x-3 rtl:space-x-reverse cursor-pointer">
                        {/* <img src="https://flowbite.com/docs/images/logo.svg" class="h-8" alt="Flowbite Logo" /> */}
                        <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Translator</span>
                    </a>


                </div>
            </nav></div>
    )
}