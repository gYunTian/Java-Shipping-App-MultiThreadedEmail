package com.portnet.dao.voyage;

import com.portnet.entity.voyage.VoyageId;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

/**
 * Data Access Objects for "voyage_id" table to perform various operations
 */

@Repository
public interface VoyageIdDao extends JpaRepository<VoyageId, Integer> {
    /**
     * Additional custom method to find voyages by a certain key
     * @param vesselName vessel's short name
     * @return voyageFavs array (empty list if no voyageFav found)
     */
    List<VoyageId> findByVesselName(String vesselName);

    /**
     * Additional custom method to find voyages by a certain key
     * @param vesselName vessel's short name
     * @param voyageNum incoming or outgoing voyage number
     * @return voyageId the auto-generated ID of the voyage, identified by vesselName and voyageNum
     */
    VoyageId findByVesselNameAndVoyageNum(String vesselName, String voyageNum);
}
