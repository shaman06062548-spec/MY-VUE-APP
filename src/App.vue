<template>


  <nav class="navbar navbar-expand-lg bg-primary" data-bs-theme="dark">
  <div class="container">
    <a class="navbar-brand" href="/">navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarScroll">
      <ul class="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" style="--bs-scroll-height: 100px;">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/customer">Customer</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/type">type</a>
        </li>
         <li class="nav-item">
          <a class="nav-link" href="/contact">contact</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/Customer_crud">Customer_crud</a>
        </li>
         <li class="nav-item">
          <a class="nav-link" href="/employee_crud">employee_crud</a>
        </li>
     

        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="/about" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            employees
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item"  href="/employees">employees </a></li>
            <li><a class="dropdown-item" href="/employee_crud">employee_crud</a></li>
            <li><a class="dropdown-item" href="/employee_crud_image">employee_crud_image
            </a></li>
            <li><hr class="dropdown-divider"></li>
          </ul>
        </li>











        <ul class="dropdown-menu"></ul>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="/about" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            product
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="/product">product</a></li>
            <li><a class="dropdown-item" href="/product_api">product_api</a></li>
            <li><a class="dropdown-item" href="/product_edit">product_edit</a></li>
            <li><hr class="dropdown-divider"></li>
            <li><a class="dropdown-item" href="/show_product">show_product</a></li>
          </ul>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled" aria-disabled="true">Link</a>
        </li>
      </ul>
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
       <button type="button" class="btn btn-success">Search</button>
      </form>
    </div>
  </div>
</nav>
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #68d600;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #26b901;
}

nav a.router-link-exact-active {
  color: #00ec82;
}
</style>