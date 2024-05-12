package com.example.primatrans.model.DTO;

import com.fasterxml.jackson.annotation.JsonFormat;
import jakarta.persistence.Column;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.format.annotation.DateTimeFormat;

import java.io.Serializable;
import java.time.LocalDate;
import java.time.LocalDateTime;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class TransportDTO implements Serializable {

    private Long id;

    private String registerSign;

    private String modelName;

    private String chassis;

    private Integer yearOfManufacture;

    private String type;

    private String color;

    private Double permissibleWeight;

    private Double unloadedWeight;

    private String technicalInspectionNumber;

    @JsonFormat(pattern = "yyyy-MM-dd")
    private LocalDate technicalInspectionDate;

    @JsonFormat(pattern = "yyyy-MM-dd")
    private LocalDate technicalInspectionValidUntilDate;

    private String mstiNumber;

    @JsonFormat(pattern = "yyyy-MM-dd")
    private LocalDate mstiDate;

    private String tachographNumber;

    @JsonFormat(pattern = "yyyy-MM-dd")
    private LocalDate tachographDate;

    private String adrNumber;

    @JsonFormat(pattern = "yyyy-MM-dd")
    private LocalDate adrDate;
}
