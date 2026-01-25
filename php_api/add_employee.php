<?php

header("Content-Type: application/json; charset=UTF-8");

include 'condb.php';


$data = json_decode(file_get_contents("php://input"), true);


if (
    empty($data['full_name']) || 
    empty($data['department']) || 
    !isset($data['salary']) || 
    !isset($data['active'])
) {
    echo json_encode([
        "success" => false,
        "message" => "ข้อมูลไม่ครบถ้วน"
    ]);
    exit;
}

try {
   
    $sql = "INSERT INTO employee
            (full_name, department, salary, active) 
            VALUES 
            (:full_name, :department, :salary, :active)";

    $stmt = $conn->prepare($sql);
    
   
    $result = $stmt->execute([
        ':full_name'  => $data['full_name'],
        ':department' => $data['department'],
        ':salary'     => $data['salary'],
        ':active'     => $data['active']
    ]);

    echo json_encode([
        "success" => true,
        "message" => "เพิ่มข้อมูลเรียบร้อย"
    ]);

} catch (PDOException $e) {
 
    echo json_encode([
        "success" => false,
        "message" => "Database Error: " . $e->getMessage()
    ]);
}