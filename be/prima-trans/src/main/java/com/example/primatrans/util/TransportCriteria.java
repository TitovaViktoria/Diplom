package com.example.primatrans.util;

import io.swagger.v3.oas.annotations.media.Schema;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class TransportCriteria {

    @Schema(example = "AE 4151-1")
    private String registerSign;

    @Schema(example = "Грузовой седельный тягач")
    private String type;

}
