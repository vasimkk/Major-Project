package com.recycle.recycle;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SecondHandProductService {

    @Autowired
    private SecondHandProductRepository secondHandProductRepository;

    public SecondHandProduct addSecondHandProduct(SecondHandProduct secondHandProduct) {
        return secondHandProductRepository.save(secondHandProduct);
    }

    public List<SecondHandProduct> getAllSecondHandProducts() {
        return secondHandProductRepository.findAll();
    }
    
    // Implement other CRUD methods as needed
}
