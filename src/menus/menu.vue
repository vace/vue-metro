<template>
    <ul class="v-menu block-shadow-impact min-size-required">
        <li class="menu-title">First Title</li>
        <li><a href="#"><span class="mif-home icon"></span> Home</a></li>
        <li class="divider"></li>
        <li class="menu-title">Second Title</li>
        <li><a href="#"><span class="mif-user icon"></span> Profile</a></li>
        <li><a href="#"><span class="mif-calendar icon"></span> Calendar</a></li>
        <li><a href="#"><span class="mif-image icon"></span> Photo</a></li>
        <li class="divider"></li>
        <li class="menu-title">Third Title</li>
        <li>
            <a href="#" class="dropdown-toggle"><span class="mif-my-location icon"></span> Location</a>
            <ul class="d-menu" data-role="dropdown">
                <li class="menu-title">Title for dropdown</li>
                <li><a href="#">Коллеги</a></li>
                <li><a href="#">Интересно</a></li>
                <li>
                    <a href="#" class="dropdown-toggle">Еще...</a>
                    <ul class="d-menu" data-role="dropdown">
                        <li><a href="#">Коллеги</a></li>
                        <li><a href="#">Интересно</a></li>
                        <li class="divider"></li>
                    </ul>
                </li>
            </ul>
        </li>
        <li><a href="#"><span class="mif-bubbles icon"></span> Community</a></li>
    </ul>
</template>
