package com.example.primatrans.service.impl;

import com.example.primatrans.constant.ResultEnum;
import com.example.primatrans.model.DTO.Mapper;
import com.example.primatrans.model.DTO.Result;
import com.example.primatrans.model.DTO.TransportDTO;
import com.example.primatrans.model.Transport;
import com.example.primatrans.repository.TransportRepository;
import com.example.primatrans.service.TransportService;
import com.example.primatrans.util.TransportCriteria;
import com.example.primatrans.util.TransportSpecification;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;

@RequiredArgsConstructor
@Service
public class TransportServiceImpl implements TransportService {

    private final TransportRepository transportRepository;

    @Override
    public List<TransportDTO> filter(TransportCriteria criteria )
    {
        return transportRepository.findAll(new TransportSpecification(criteria)).stream().map(Mapper::toDto).toList();
    }

    @Override
    public List<TransportDTO> getAll()
    {
        return transportRepository.findAll().stream().map(Mapper::toDto).toList();
    }

    @Override
    public List<TransportDTO> getTechnicalInspectionExpired()
    {
        return transportRepository.findAllByTechnicalInspectionValidUntilDateBefore(LocalDate.now()).stream()
                .map(Mapper::toDto)
                .toList();
    }

    @Override
    public List<TransportDTO> getMstiExpired()
    {
        return transportRepository.findAllByMstiDateBefore(LocalDate.now())
                .stream()
                .map(Mapper::toDto)
                .toList();
    }

    @Override
    public List<TransportDTO> getTachographExpired()
    {
        return transportRepository.findAllByTachographDateBefore(LocalDate.now())
                .stream()
                .map(Mapper::toDto)
                .toList();
    }

    @Override
    public Result delete(Long id)
    {
        var transport = transportRepository.findById(id);
        var result = new Result();
        result.setEntityId(id);


        if (transport.isPresent()) {
            transportRepository.deleteById(id);
            result.setResultEnum(ResultEnum.SUCCESS);
        } else {
            result.setResultEnum(ResultEnum.NO_SUCH_ENTITY);
        }

        return result;
    }

    @Override
    public Result deleteByRegisterSign(String registerSign)
    {
        var transport = transportRepository.findByRegisterSign(registerSign);
        var result = new Result();


        if (transport.isPresent()) {
            transportRepository.delete(transport.get());
            result.setResultEnum(ResultEnum.SUCCESS);
        } else {
            result.setResultEnum(ResultEnum.NO_SUCH_ENTITY);
        }

        return result;
    }

    @Override
    public Result updateByRegisterSign(String registerSign, TransportDTO transportDTO)
    {

        var transportOptional = transportRepository.findByRegisterSign(registerSign);

        if (transportOptional.isEmpty()) {
            return new Result().builder()
                    .resultEnum(ResultEnum.NO_SUCH_ENTITY)
                    .build();
        }

        var transport = transportOptional.get();

        update(transport, transportDTO);

        return new Result().builder()
                .resultEnum(ResultEnum.SUCCESS)
                .build();
    }

    @Override
    public Result update(Long id, TransportDTO transportDTO)
    {
        var transportOptional = transportRepository.findById(id);

        if (transportOptional.isEmpty()) {
            return new Result().builder()
                    .entityId(id)
                    .resultEnum(ResultEnum.NO_SUCH_ENTITY)
                    .build();
        }

        var transport = transportOptional.get();

        update(transport, transportDTO);

        return new Result().builder()
            .entityId(id)
            .resultEnum(ResultEnum.SUCCESS)
            .build();
    }

    private Transport update(Transport transport, TransportDTO transportDTO) {
        if (transportDTO.getAdrDate() != null) {
            transport.setAdrDate(transportDTO.getAdrDate());
        }
        if (transportDTO.getAdrNumber() != null) {
            transport.setAdrNumber(transportDTO.getAdrNumber());
        }
        if (transportDTO.getColor() != null) {
            transport.setColor(transportDTO.getColor());
        }
        if (transportDTO.getChassis() != null) {
            transport.setChassis(transportDTO.getChassis());
        }
        if (transportDTO.getRegisterSign() != null) {
            transport.setRegisterSign(transportDTO.getRegisterSign());
        }
        if (transportDTO.getModelName() != null) {
            transport.setModelName(transportDTO.getModelName());
        }
        if (transportDTO.getType() != null) {
            transport.setType(transportDTO.getType());
        }
        if (transportDTO.getYearOfManufacture() != null) {
            transport.setYearOfManufacture(transportDTO.getYearOfManufacture());
        }
        if (transportDTO.getPermissibleWeight() != null) {
            transport.setPermissibleWeight(transportDTO.getPermissibleWeight());
        }
        if (transportDTO.getUnloadedWeight() != null) {
            transport.setUnloadedWeight(transportDTO.getUnloadedWeight());
        }
        if (transportDTO.getTechnicalInspectionNumber() != null) {
            transport.setTechnicalInspectionNumber(transportDTO.getTechnicalInspectionNumber());
        }
        if (transportDTO.getTechnicalInspectionDate() != null) {
            transport.setTechnicalInspectionDate(transportDTO.getTechnicalInspectionDate());
        }
        if (transportDTO.getTechnicalInspectionValidUntilDate() != null) {
            transport.setTechnicalInspectionValidUntilDate(transportDTO.getTechnicalInspectionValidUntilDate());
        }
        if (transportDTO.getMstiNumber() != null) {
            transport.setMstiNumber(transportDTO.getMstiNumber());
        }
        if (transportDTO.getMstiDate() != null) {
            transport.setMstiDate(transportDTO.getMstiDate());
        }
        if (transportDTO.getTachographNumber() != null) {
            transport.setTachographNumber(transportDTO.getTachographNumber());
        }
        if (transportDTO.getTachographDate() != null) {
            transport.setTachographDate(transportDTO.getTachographDate());
        }

        return  transportRepository.save(transport);
    }


    @Override
    public Result create(TransportDTO transportDTO)
    {
        Long id = transportRepository.save(Mapper.toEntity(transportDTO)).getId();
        return new Result().builder()
                .entityId(id)
                .resultEnum(ResultEnum.SUCCESS)
                .build();
    }

    @Override
    public TransportDTO getById(Long id)
    {
        return Mapper.toDto(transportRepository.findById(id).orElse(null));
    }
}
