<div class="outer_container">
<h1 class="roadmap_text">ROADMAP</h1>
<div class="roadmap">
    <ul>
        <li>
            <div class="roadmap_content">
                <div class="check"></div>
                <h1>Test item</h1>
                <p>completing the first test cum testing</p>
            </div>
        </li>
        <li>
            <div class="roadmap_content">
                <div class="check"></div>
                <h1>Head 2</h1>
                <p>completing the first test cum testing</p>
            </div>
        </li>
        <li>
            <div class="roadmap_content">
                <div class="check"></div>
                <h1>Test item</h1>
                <p>completing the first test cum testing</p>
            </div>
        </li>
        <li>
            <div class="roadmap_content">
                <div class="check"></div>
                <h1>Test item</h1>
                <p>completing the first test cum testing</p>
            </div>
        </li>
    </ul>
</div>
</div>

<style>
    .outer_container{
        padding: 100px 0 0 0;
    }
    .roadmap_text{
        justify-content: center;
        align-items: center;
        display: flex;
        /* color: red; */

    }
    .roadmap{
        /* min-height: 100vh; */
        justify-content: center;
        align-items: center;
        display: flex;
        width: 100%;
        position: relative;
        padding: 100px 10px;
    }
    .roadmap_content{
        width: 80%;
        height: auto;
        max-width: 800px;
        margin: 0 auto;
        position: relative;
    }

    .roadmap ul{
        list-style-type: none;
    }

    .roadmap ul li{
        padding: 20px;
        background-color: rgba(94, 241, 131, 0.877);
        border-radius: 10px;
        margin-bottom: 10px;
    }
    .roadmap ul li:last-child{
        margin-bottom: 0;
    }

    .roadmap_content h1{
        font-size: 25px;
        font-weight: 800;
        line-height: 30px;
        margin-bottom: 10px;
    }

    .roadmap_content p{
        font-size: 16px;
        line-height: 30px;
        font-weight: 300;
    }

    @media only screen and (max-width: 768px){

        .roadmap::before{
            content: '';
            position: absolute;
            height: 85%;
            width: 2px;
            background-color: aqua;
            /* margin-left: -65%; */
            left: 18%;
        }

        .roadmap ul li{
            width: 50%;
            margin-left: 32%;
            margin-bottom: 50px;
            /* float: right; */
            /* clear: left; */
        }

        .roadmap ul li::after {
            content: '';
            position: absolute;
            height: 10px;
            widows: 10px;
            /* border-radius: 50%; */
            color: rgb(241, 24, 24);
            /* top: 0; */
            /* transform: translateX(30px); */
        }

        .check{
            content: '';
            position: absolute;
            height: 10px;
            widows: 10px;
            /* border-radius: 50%; */
            color: rgb(241, 24, 24);
            /* top: 0; */
            /* transform: translateX(30px); */
            z-index: 99;
        }
    }

</style>