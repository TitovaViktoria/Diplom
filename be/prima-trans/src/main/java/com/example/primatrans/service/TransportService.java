package com.example.primatrans.service;

import com.example.primatrans.model.DTO.Result;
import com.example.primatrans.model.DTO.TransportDTO;
import com.example.primatrans.util.TransportCriteria;

import java.util.List;

public interface TransportService {

    List<TransportDTO> filter(TransportCriteria criteria);

    List<TransportDTO> getAll();

    List<TransportDTO> getTechnicalInspectionExpired();

    List<TransportDTO> getMstiExpired();

    List<TransportDTO> getTachographExpired();

    Result delete(Long id);

    Result deleteByRegisterSign(String registerSign);

    Result updateByRegisterSign(String registerSign, TransportDTO transportDTO);

    Result update(Long id, TransportDTO transportDTO);

    Result create(TransportDTO transportDTO);

    TransportDTO getById(Long id);




}
