<script>
    let showMobileMenu = false;

// Mobile menu click event handler
const activateHamburger = () => {showMobileMenu = !showMobileMenu;}

</script>

<header>
    <nav class= "navbar">
        <a href="#" class="nav-branding green"> Test </a>

        <ul class={`nav-menu${showMobileMenu ? ' active' : ''}`}>
            <li class="nav-items"> <a href="#" class="nav-link">HOME</a></li>
            <li class="nav-items"> <a href="#" class="nav-link">LOT</a></li>
            <li class="nav-items"> <a href="#" class="nav-link">ABOUT</a></li>
        </ul>
        <div on:click={activateHamburger} class={`hamburger${showMobileMenu ? ' active' : ''}`}>
            <span class="bar"></span>
            <span class="bar"></span>
            <span class="bar"></span>
        </div>
    </nav>
</header>

<style>

header{
    /* background-color: rgb(28, 28, 149); */
    background-color: rgb(19, 18, 18);
    /* margin-bottom: 50px  ; */
}

li{
    list-style-type: none;
    font-size: 14px;
}

a{
    color: white;
    text-decoration: none;
    font-family: 'PTMonoRegular', sans-serif;
}

.navbar{
    min-height: 70px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 24px;
}

.nav-menu{
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 60px;
}

.green{
    color: #1ABC9C;
}

.nav-branding{
    font-size: 1.75rem;
    font-weight: 500;
    /* color: rgba(0, 255, 64, 0.877); */
    font-family: 'Lobster', sans-serif;
}

.nav-link{
    /* transition: 0.1s ease; */
}

.nav-link:hover{
    color: #1ABC9C;
}

.hamburger{
    display: none;
    cursor: pointer;
}

.bar{
    display: block;
    width: 25px;
    height: 3px;
    margin: 5px auto;
    -webkit-transition: all 0.1s ease-in-out;
    transition: all 0.1s ease-in-out;
    background-color: white;
}

@media(max-width:768px){
    .hamburger{
        display: block;
    }

    .hamburger.active .bar:nth-child(2){
        opacity: 0;
    }

    .hamburger.active .bar:nth-child(1){
        transform: translateY(8px) rotate(45deg);
    }

    .hamburger.active .bar:nth-child(3){
        transform: translateY(-8px) rotate(-45deg);
    }

    .nav-menu{
        position: fixed;
        left: -100%;
        top: 70px;
        gap:0;
        flex-direction: column;
        background-color: rgb(19, 18, 18);
        /* background-color: rgb(38, 14, 146); */
        /* padding: 50px 50px; */
        width: 100%;
        text-align: center;
        /* transition: 0.2s; */
    }

    .nav-item{
        margin: 16px 0;
    }

    .nav-menu.active{
        position: absolute;
        left: 0;
    }

}

</style>