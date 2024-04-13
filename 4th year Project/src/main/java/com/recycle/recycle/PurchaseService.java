package com.recycle.recycle;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class PurchaseService {

    @Autowired
    private PurchaseRepository purchaseRepository;

    public void processPurchase(Purchase request) {
        // Implement logic to save purchase information to the database
        Purchase purchase = new Purchase();
        purchase.setProductId(request.getProductId());
        purchase.setUserName(request.getUserName());
        purchase.setUserAddress(request.getUserAddress());
        // Save the purchase entity to the database
        purchaseRepository.save(purchase);
    }
}


