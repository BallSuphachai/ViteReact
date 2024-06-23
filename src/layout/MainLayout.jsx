
function MainLayout() {
  return (
    <section>
      <nav className="main-nav">
        <a href="#">
          <img className="logo" src="\src\img\farm_logo.png" alt="" />
        </a>
        <h2 className="H2nav">Vegetable Farm</h2>
        <div className="right-nav">
          <a href="#menu1">Menu 1</a>
          <a href="#menu2">Menu 2</a>
          <a href="#menu3">Menu 3</a>
          <a href="#menu4">Menu 4</a>
        </div>
      </nav>
    </section>
  )
}

export default MainLayout