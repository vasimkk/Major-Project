package com.recycle.recycle;

import org.springframework.data.jpa.repository.JpaRepository;

public interface PurchaseRepository extends JpaRepository<Purchase, Long> {
    // Define custom query methods if needed
}

