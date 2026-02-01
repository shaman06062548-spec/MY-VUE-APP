<template>
  <div class="container mt-4">
    <h2 class="mb-3">ประเภทสินค้า</h2>
    
    <div class="mb-3">
      <button class="btn btn-primary" @click="openAddModal">
        Add <i class="bi bi-plus-circle"></i>
      </button>
    </div>

    <table class="table table-bordered table-striped">
      <thead class="table-dark">
        <tr>
          <th>รหัสประเภท</th>
          <th>ชื่อประเภท</th>
          <th>แก้ไข/ลบ</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="type in types" :key="type.type_id">
          <td>{{ type.type_id }}</td>
          <td>{{ type.type_name }}</td>
          <td>
            <button class="btn btn-warning btn-sm" @click="openEditModal(type)">
              แก้ไข
            </button>
            |
            <button class="btn btn-danger btn-sm" @click="deleteType(type.type_id)">
              ลบ
            </button>
          </td>
        </tr>
      </tbody>
    </table>

    <div v-if="loading" class="text-center"><p>กำลังโหลดข้อมูล...</p></div>
    <div v-if="error" class="alert alert-danger">{{ error }}</div>

    <div class="modal fade" id="typeModal" tabindex="-1">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">{{ isEditMode ? "แก้ไขประเภทสินค้า" : "เพิ่มประเภทสินค้าใหม่" }}</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
          </div>
          <div class="modal-body">
            <form @submit.prevent="saveType">
              <div class="mb-3">
                <label class="form-label">ชื่อประเภทสินค้า</label>
                <input v-model="editData.type_name" type="text" class="form-control" required>
              </div>
              <button type="submit" class="btn btn-success">
                {{ isEditMode ? "บันทึกการแก้ไข" : "เพิ่มข้อมูล" }}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import { ref, onMounted } from "vue";

export default {
  name: "typeList",
  setup() {
    const types = ref([]);
    const loading = ref(true);
    const error = ref(null);
    
    // สถานะสำหรับ Modal
    const editData = ref({ type_name: "" });
    const isEditMode = ref(false);
    let typeModal = null;

    const fetchTypes = async () => {
      try {
        const response = await fetch("http://127.168.72.1/MY-VUE-APP/php_api/show_type.php");
        if (!response.ok) throw new Error("ไม่สามารถดึงข้อมูลได้");
        types.value = await response.json();
      } catch (err) {
        error.value = err.message;
      } finally {
        loading.value = false;
      }
    };

    onMounted(() => {
      fetchTypes();
      // สร้าง instance ของ Bootstrap Modal
      const modalEl = document.getElementById("typeModal");
      typeModal = new window.bootstrap.Modal(modalEl);
    });

    // ✅ เปิด Modal เพิ่มข้อมูล
    const openAddModal = () => {
      isEditMode.value = false;
      editData.value = { type_name: "" };
      typeModal.show();
    };

    // ✅ เปิด Modal แก้ไข
    const openEditModal = (type) => {
      isEditMode.value = true;
      editData.value = { ...type }; // คัดลอกข้อมูลใส่ Modal
      typeModal.show();
    };

    // ✅ ฟังก์ชันบันทึก (POST / PUT)
    // หมายเหตุ: คุณต้องเตรียมไฟล์ PHP ให้รองรับการทำงานนี้เหมือน employee_crud.php
    const saveType = async () => {
      const url = "http://127.168.72.1/MY-VUE-APP/php_api/type_crud.php"; // เปลี่ยนเป็นไฟล์ CRUD ของคุณ
      const method = isEditMode.value ? "PUT" : "POST";

      try {
        const response = await fetch(url, {
          method,
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(editData.value)
        });
        const result = await response.json();
        if (result.success) {
          alert(result.message);
          fetchTypes();
          typeModal.hide();
        } else {
          alert(result.message);
        }
      } catch (err) {
        alert("เกิดข้อผิดพลาด: " + err.message);
      }
    };

    // ✅ ฟังก์ชันลบ
    const deleteType = async (id) => {
      if (!confirm("คุณต้องการลบข้อมูลนี้ใช่หรือไม่?")) return;
      try {
        const response = await fetch("http://127.168.72.1/MY-VUE-APP/php_api/type_crud.php", {
          method: "DELETE",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ type_id: id })
        });
        const result = await response.json();
        if (result.success) {
          types.value = types.value.filter(t => t.type_id !== id);
          alert(result.message);
        } else {
          alert(result.message);
        }
      } catch (err) {
        alert("เกิดข้อผิดพลาด: " + err.message);
      }
    };

    return {
      types,
      loading,
      error,
      editData,
      isEditMode,
      openAddModal,
      openEditModal,
      saveType,
      deleteType
    };
  }
};
</script>