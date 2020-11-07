// burger menu smooth transition in mobile view
const burger = document.querySelector('#burger')
const menu = document.querySelector('#menu')
const closeMenu = document.querySelector('#close-menu')

if (burger) {
    burger.addEventListener('click', () => {
        if (menu.classList.contains('menu-hidden')) {
            menu.classList.remove('hidden')
            setTimeout(() => {
                menu.classList.remove('menu-hidden')
                menu.classList.add('menu-shown')
            }, 150);
        }
    })
}

if (closeMenu) {
    closeMenu.addEventListener('click', () => {
        menu.classList.add('menu-hidden')
        menu.classList.remove('menu-shown')
        setTimeout(() => {
            menu.classList.add('hidden')
        }, 150);
    })
}

// toggle switch functionality
const toggleSwitch = document.querySelector('#toggle-switch')
const switchBox = document.querySelector('#switch-box')
const switchOff = document.querySelector('#switch-off')
const switchOn = document.querySelector('#switch-on')

if (toggleSwitch) {
    toggleSwitch.addEventListener('click', () => {
        if (toggleSwitch.classList.contains('bg-gray-900')) {
            toggleSwitch.classList.add('bg-gray-400')
            toggleSwitch.classList.remove('bg-gray-900')
            switchBox.classList.add('translate-x-0')
            switchBox.classList.remove('translate-x-5')
            switchOff.classList.add('opacity-100', 'ease-in', 'duration-200')
            switchOff.classList.remove('opacity-0', 'ease-out', 'duration-100')
            switchOn.classList.add('opacity-0', 'ease-out', 'duration-100')
            switchOn.classList.remove('opacity-100', 'ease-in', 'duration-200')
        } else {
            toggleSwitch.classList.add('bg-gray-900')
            toggleSwitch.classList.remove('bg-gray-400')
            switchBox.classList.add('translate-x-5')
            switchBox.classList.remove('translate-x-0')
            switchOff.classList.add('opacity-0', 'ease-out', 'duration-100')
            switchOff.classList.remove('opacity-100', 'ease-in', 'duration-200')
            switchOn.classList.add('opacity-100', 'ease-in', 'duration-200')
            switchOn.classList.remove('opacity-0', 'ease-out', 'duration-100')
        }
    })
}