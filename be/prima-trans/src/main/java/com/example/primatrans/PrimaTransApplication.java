package com.example.primatrans;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.properties.ConfigurationPropertiesScan;
import org.springframework.context.annotation.Configuration;

@SpringBootApplication
@ConfigurationPropertiesScan
public class PrimaTransApplication {

	public static void main(String[] args) {
		SpringApplication.run(PrimaTransApplication.class, args);
	}

}
