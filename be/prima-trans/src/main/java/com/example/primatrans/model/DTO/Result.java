package com.example.primatrans.model.DTO;

import com.example.primatrans.constant.ResultEnum;
import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Result {

    private Long entityId;

    private ResultEnum resultEnum;
}
