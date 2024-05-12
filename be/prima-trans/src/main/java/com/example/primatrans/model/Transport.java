package com.example.primatrans.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.format.annotation.DateTimeFormat;

import java.time.LocalDate;
import java.util.StringJoiner;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity(name = "transport")
public class Transport {

    @Id
    @GeneratedValue(strategy =  GenerationType.IDENTITY)
    private Long id;

    @Column(name = "register_sign", unique = true)
    private String registerSign;

    @Column(name = "model_name")
    private String modelName;

    private String chassis;

    @Column(name = "year_of_manufacture")
    private Integer yearOfManufacture;

    private String type;

    private String color;

    @Column(name = "permissible_weight")
    private Double permissibleWeight;

    @Column(name = "unloaded_weight")
    private Double unloadedWeight;

    @Column(name = "technical_inspection_number")
    private String technicalInspectionNumber;

    @DateTimeFormat(iso = DateTimeFormat.ISO.DATE)
    @Column(name = "technical_inspection_date")
    private LocalDate technicalInspectionDate;

    @DateTimeFormat(iso = DateTimeFormat.ISO.DATE)
    @Column(name = "technical_inspection_valid_until_date")
    private LocalDate technicalInspectionValidUntilDate;

    @Column(name = "msti_number")
    private String mstiNumber;

    @DateTimeFormat(iso = DateTimeFormat.ISO.DATE)
    @Column(name = "msti_valid_until_date")
    private LocalDate mstiDate;

    @Column(name = "tachographNumber")
    private String tachographNumber;

    @DateTimeFormat(iso = DateTimeFormat.ISO.DATE)
    @Column(name = "tachograph_date")
    private LocalDate tachographDate;

    @Column(name = "adr_number")
    private String adrNumber;

    @DateTimeFormat(iso = DateTimeFormat.ISO.DATE)
    @Column(name = "adr_date")
    private LocalDate adrDate;

    @Override
    public String toString()
    {
        return new StringJoiner(", ", Transport.class.getSimpleName() + "[", "\n]")
                .add("\n\t" + "id=" + id)
                .add("\n\t" + "registerSign=" + "'" + registerSign + "'")
                .add("\n\t" + "modelName=" + "'" + modelName + "'")
                .add("\n\t" + "chassis=" + chassis)
                .add("\n\t" + "yearOfManufacture=" + yearOfManufacture)
                .add("\n\t" + "type=" + type)
                .add("\n\t" + "color=" + color)
                .add("\n\t" + "permissibleWeight=" + permissibleWeight)
                .add("\n\t" + "unloadedWeight=" + unloadedWeight)
                .add("\n\t" + "technicalInspectionNumber=" + technicalInspectionNumber)
                .add("\n\t" + "technicalInspectionDate=" + technicalInspectionDate)
                .add("\n\t" + "technicalInspectionValidUntilDate=" + technicalInspectionValidUntilDate)
                .add("\n\t" + "mstiNumber=" + mstiNumber)
                .add("\n\t" + "mstiDate=" + mstiDate)
                .add("\n\t" + "tachographNumber=" + tachographNumber)
                .add("\n\t" + "tachographDate=" + tachographDate)
                .add("\n\t" + "adrNumber=" + adrNumber)
                .add("\n\t" + "adrDate=" + adrDate)
                .toString();
    }
}
