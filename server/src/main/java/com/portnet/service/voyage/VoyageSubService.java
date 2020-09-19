package com.portnet.service.voyage;

import com.portnet.dao.voyage.VoyageSubDao;
import com.portnet.entity.voyage.VoyageSub;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class VoyageSubService {

    @Autowired
    private VoyageSubDao voyageSubDao;

    /**
     * Add VoyageSub to database
     * @param voyageSub object
     */
    public void saveVoyageSub(VoyageSub voyageSub) {
        voyageSubDao.save(voyageSub);
    }

    /**
     * Add VoyageSubs in array to database
     * @param voyageSubs array
     */
    public void saveVoyageSubs(List<VoyageSub> voyageSubs) {
        voyageSubDao.saveAll(voyageSubs);
    }

    
    /**
     * Get all VoyageSubs in database
     * @return voyageSubs array
     */
    public List<VoyageSub> getVoyageSub() {
        return voyageSubDao.findAll();
    }

    /**
     * Get VoyageSubs with specified userId in database
     * @param userId the auto-generated ID of the user
     * @return voyageSub object
     */
    public List<VoyageSub> getVoyageSubByUserId(int userId) {
        return voyageSubDao.findByUserId(userId);
    }


    /**
     * Remove VoyageSub with specified userId and voyageId from database
     * @param userId the auto-generated ID of the user
     * @param voyageId the auto-generated ID of the voyage, identified by vesselName and voyageNum
     */
    public void deleteVoyageSub(int userId, int voyageId) {
        voyageSubDao.deleteByUserIdAndVoyageId(userId, voyageId);
    }

}