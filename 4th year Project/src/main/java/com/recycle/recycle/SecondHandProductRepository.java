package com.recycle.recycle;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SecondHandProductRepository extends JpaRepository<SecondHandProduct, Long> {
}
