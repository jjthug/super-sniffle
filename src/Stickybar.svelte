<div id="sticky_bar">
    <div id="sticky_bar_text">
        Your notification goes here ..
    </div>
    <div id="sticky_bar_btn">
        <a target="_blank" class="btn" href="#">Sample Button</a>
    </div>
</div>

<style>

#sticky_bar {
    padding: 8px 5px;
    background: #222;
    position: sticky;
    position: -webkit-sticky;
    top: 0;
    z-index: 999;
    text-align: center;
    box-shadow: 0px 1px 11px #888888;
    color: #fff;
    font-family: 'Viga', sans-serif;
    font-size: 1.1em;
}
#sticky_bar_text, #sticky_bar_btn {
    display: inline-block;
}
#sticky_bar_btn a {
  background:red;
  color:#fff;
  padding:2px 5px;
  text-decoration:none;
  border-radius:3px;
}
</style>