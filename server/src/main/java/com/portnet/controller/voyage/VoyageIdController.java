package com.portnet.controller.voyage;

import com.portnet.entity.voyage.VoyageId;
import com.portnet.service.storage.VoyageIdService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * REST APIs using service methods for VoyageId
 */

@RestController
public class VoyageIdController {

    @Autowired
    private VoyageIdService service;

    /**
     * Add methods
     */

    @PostMapping("/addVoyageId")
    public void addVoyageId(@RequestBody VoyageId voyageId) {
        service.saveVoyageId(voyageId);
    }

    @PostMapping("/addVoyageIds")
    public void addVoyageIds(@RequestBody List<VoyageId> voyageIds) {
        service.saveVoyageIds(voyageIds);
    }

    /**
     * Get methods
     */

    @GetMapping("/voyageIds")
    public List<VoyageId> findAllVoyageIds() {
        return service.getVoyageIds();
    }

    @GetMapping("/voyageIdById/{id}")
    public VoyageId findVoyageIdById(@PathVariable int id) {
        return service.getVoyageIdById(id);
    }

    @GetMapping("/voyageIdByVesselName/{vesselName}")
    public List<VoyageId> findVoyageIdByVesselName(@PathVariable String vesselName) {
        return service.getVoyageIdByVesselName(vesselName);
    }

    @GetMapping("/voyageIdByVesselNameAndVoyageNum/{vesselName}/{voyageName}")
    public VoyageId findVoyageIdById(@PathVariable String vesselName, @PathVariable String voyageNum) {
        return service.getVoyageIdByVesselNameAndVoyageNum(vesselName, voyageNum);
    }



}
