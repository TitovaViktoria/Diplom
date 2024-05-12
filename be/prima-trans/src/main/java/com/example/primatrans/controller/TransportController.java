package com.example.primatrans.controller;

import com.example.primatrans.constant.ResultEnum;
import com.example.primatrans.model.DTO.Result;
import com.example.primatrans.model.DTO.TransportDTO;
import com.example.primatrans.service.TransportService;
import com.example.primatrans.util.TransportCriteria;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import org.springdoc.core.annotations.ParameterObject;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

import static com.example.primatrans.constant.Constants.API;

@Tag(name = "transport",description = "CRUD for transport")
@RestController
@RequiredArgsConstructor
@RequestMapping(API + "transport")
public class TransportController {

    private final TransportService transportService;

    @Operation
    @GetMapping
    public ResponseEntity<List<TransportDTO>> filter(@ParameterObject TransportCriteria criteria, @ParameterObject
            Pageable pageable
            ) {
        return new ResponseEntity<List<TransportDTO>>(transportService.filter(criteria), HttpStatus.OK);
    }

    @Operation
    @GetMapping("/ti")
    public ResponseEntity<List<TransportDTO>> getTechnicalInspectionExpired(@ParameterObject
    Pageable pageable) {
        return new ResponseEntity<List<TransportDTO>>(transportService.getTechnicalInspectionExpired(), HttpStatus.OK);
    }

    @Operation
    @GetMapping("/msti")
    public ResponseEntity<List<TransportDTO>> getMstiExpired(@ParameterObject
    Pageable pageable) {
        return new ResponseEntity<List<TransportDTO>>(transportService.getMstiExpired(), HttpStatus.OK);
    }
    @Operation
    @GetMapping("/tachograph")
    public ResponseEntity<List<TransportDTO>> getTachographExpired(@ParameterObject
    Pageable pageable) {
        return new ResponseEntity<List<TransportDTO>>(transportService.getTachographExpired(), HttpStatus.OK);
    }

    @Operation
    @DeleteMapping("/{id}")
    public ResponseEntity<?> delete(@PathVariable("id") Long id) {
        var res = transportService.delete(id);
        if (res.getResultEnum() == ResultEnum.NO_SUCH_ENTITY) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        } else {
            return new ResponseEntity<>(HttpStatus.OK);
        }
    }

    @Operation
    @DeleteMapping("/register-sign/{registerSign}")
    public ResponseEntity<?> deleteByRegisterSign(@PathVariable("registerSign") String registerSign) {
        var res = transportService.deleteByRegisterSign(registerSign);
        if (res.getResultEnum() == ResultEnum.NO_SUCH_ENTITY) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        } else {
            return new ResponseEntity<>(HttpStatus.OK);
        }
    }

    @Operation
    @PutMapping("/{id}")
    public ResponseEntity<?> update(@PathVariable("id")Long id, @RequestBody TransportDTO transportDTO) {
        var res = transportService.update(id, transportDTO);
        if (res.getResultEnum() == ResultEnum.NO_SUCH_ENTITY) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        } else {
            return new ResponseEntity<>(HttpStatus.OK);
        }
    }

    @Operation
    @PutMapping("/register-sign/{registerSign}")
    public ResponseEntity<?> updateByRegisterSign(
            @PathVariable("registerSign") String registerSign,
            @RequestBody TransportDTO transportDTO) {

        var res = transportService.updateByRegisterSign(registerSign, transportDTO);
        if (res.getResultEnum() == ResultEnum.NO_SUCH_ENTITY) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        } else {
            return new ResponseEntity<>(HttpStatus.OK);
        }
    }

    @Operation
    @PostMapping
    public ResponseEntity<?> create(@RequestBody TransportDTO transportDTO) {
        var res = transportService.create(transportDTO);
        if (res.getResultEnum() == ResultEnum.SUCCESS) {
            return new ResponseEntity<>(HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
    }

    @Operation
    @GetMapping("/{id}")
    public ResponseEntity<?> getById(@PathVariable("id") Long id) {
        var res = transportService.getById(id);
        if (res != null) {
            return new ResponseEntity<>(res, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }




}
