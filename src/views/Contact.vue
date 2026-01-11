<template>
  <div class="container mt-5">
    <div class="text-start mb-4">
      <h1 class="display-5 fw-bold">Contact to kitsana srirupabut</h1>
      <h3 class="text-muted">Tel.063-421-0629</h3>
    </div>

    <div class="row">
      <div class="col-md-6 text-start">
        <img src="../assets/images.jpg" class="img-fluid rounded mb-4 shadow-sm" alt="Cat Image" style="width: 30%;">
        <br>
        <img src="../assets/images.jpg" class="img-fluid rounded shadow-sm" alt="Beach Image" style="width: 30%;">
      </div>

      <div class="col-md-6 d-flex flex-column justify-content-center">
        <div class="mb-3 text-start">
          <label for="emailInput" class="form-label">Email address</label>
          <input type="email" class="form-control" id="emailInput" placeholder="name@example.com">
        </div>
        
        <div class="mb-3 text-start">
          <label for="detailTextarea" class="form-label">Detail</label>
          <textarea class="form-control" id="detailTextarea" rows="4"></textarea>
        </div>

        <div class="text-end mt-3">
          <button type="button" class="btn btn-primary me-2 px-4">Submit</button>
          <button type="button" class="btn btn-danger px-4">Cancel</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

h1 {
  color: #333;
}

.form-label {
  font-weight: 500;
}
</style>