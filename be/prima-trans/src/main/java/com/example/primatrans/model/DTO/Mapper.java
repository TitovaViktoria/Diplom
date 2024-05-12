package com.example.primatrans.model.DTO;

import com.example.primatrans.model.Transport;

public class Mapper {

    public static TransportDTO toDto(Transport transport) {
        if (transport == null) {
            return null;
        }

        TransportDTO dto = new TransportDTO();
        dto.setId(transport.getId());
        dto.setColor(transport.getColor());
        dto.setRegisterSign(transport.getRegisterSign());
        dto.setModelName(transport.getModelName());
        dto.setChassis(transport.getChassis());
        dto.setYearOfManufacture(transport.getYearOfManufacture());
        dto.setType(transport.getType());
        dto.setColor(transport.getColor());
        dto.setPermissibleWeight(transport.getPermissibleWeight());
        dto.setUnloadedWeight(transport.getUnloadedWeight());
        dto.setTechnicalInspectionNumber(transport.getTechnicalInspectionNumber());
        dto.setTechnicalInspectionDate(transport.getTechnicalInspectionDate());
        dto.setTechnicalInspectionValidUntilDate(transport.getTechnicalInspectionValidUntilDate());
        dto.setMstiNumber(transport.getMstiNumber());
        dto.setMstiDate(transport.getMstiDate());
        dto.setTachographNumber(transport.getTachographNumber());
        dto.setTachographDate(transport.getTachographDate());
        dto.setAdrNumber(transport.getAdrNumber());
        dto.setAdrDate(transport.getAdrDate());

        return dto;
    }

    public static Transport toEntity(TransportDTO dto) {
        if (dto == null) {
            return null;
        }

        Transport transport = new Transport();
        transport.setId(dto.getId());
        transport.setRegisterSign(dto.getRegisterSign());
        transport.setModelName(dto.getModelName());
        transport.setChassis(dto.getChassis());
        transport.setYearOfManufacture(dto.getYearOfManufacture());
        transport.setType(dto.getType());
        transport.setColor(dto.getColor());
        transport.setPermissibleWeight(dto.getPermissibleWeight());
        transport.setUnloadedWeight(dto.getUnloadedWeight());
        transport.setTechnicalInspectionNumber(dto.getTechnicalInspectionNumber());
        transport.setTechnicalInspectionDate(dto.getTechnicalInspectionDate());
        transport.setTechnicalInspectionValidUntilDate(dto.getTechnicalInspectionValidUntilDate());
        transport.setMstiNumber(dto.getMstiNumber());
        transport.setMstiDate(dto.getMstiDate());
        transport.setTachographNumber(dto.getTachographNumber());
        transport.setTachographDate(dto.getTachographDate());
        transport.setAdrNumber(dto.getAdrNumber());
        transport.setAdrDate(dto.getAdrDate());

        return transport;
    }

}
