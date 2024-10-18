const PopularItem = () => {


    return (
        <div class="max-w-xs mx-auto p-6 bg-white shadow-md rounded-lg">
            {/* <!-- Title --> */}
            <h2 class="text-xl font-bold text-center mb-2">MOST POPULAR</h2>
            {/* <!-- Description --> */}
            <p class="text-gray-600 text-center mb-4">We focus on ergonomics and meeting you where you work. It's only a keystroke away.</p>
            {/* <!-- Image --> */}
            <div class="flex justify-center mb-4">
                <img src="https://placehold.co/350x250" alt="Product" class="w-32 h-32 object-cover" />
            </div>
            {/* <!-- Department --> */}
            <h3 class="text-center text-lg font-semibold mb-2">English Department</h3>
            {/* <!-- Sales count --> */}
            <div class="flex justify-center items-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-1 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h18M9 16l-3-3m0 0l3-3m-3 3h12"></path>
                </svg>
                <p class="text-gray-600 text-sm">15 Sales</p>
            </div>
            {/* <!-- Price --> */}
            <div class="text-center mb-4">
                <span class="line-through text-gray-400">$16.48</span>
                <span class="text-green-600 font-bold">$6.48</span>
            </div>
            {/* <!-- Color indicators --> */}
            <div class="flex justify-center space-x-2">
                <span class="w-4 h-4 rounded-full bg-blue-500"></span>
                <span class="w-4 h-4 rounded-full bg-green-500"></span>
                <span class="w-4 h-4 rounded-full bg-orange-500"></span>
                <span class="w-4 h-4 rounded-full bg-gray-800"></span>
            </div>
        </div>

    )
}

export default PopularItem;