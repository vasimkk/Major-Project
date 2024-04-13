package com.recycle.recycle;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController

public class SecondHandProductController {

    @Autowired
    private SecondHandProductService secondHandProductService;

    @PostMapping("/sproduct")
    public ResponseEntity<?> addSecondHandProduct(@RequestBody SecondHandProduct secondHandProduct) {
        try {
            SecondHandProduct savedProduct = secondHandProductService.addSecondHandProduct(secondHandProduct);
            return ResponseEntity.ok(savedProduct);
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(null);
        }
    }
 @GetMapping("/Allsproduct")
    public ResponseEntity<List<SecondHandProduct>> getAllSecondHandProducts() {
        List<SecondHandProduct> products = secondHandProductService.getAllSecondHandProducts();
        return ResponseEntity.ok(products);
    }

    // Implement other CRUD endpoints
}
