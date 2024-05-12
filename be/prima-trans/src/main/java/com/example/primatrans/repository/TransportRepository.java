package com.example.primatrans.repository;

import com.example.primatrans.model.Transport;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.stereotype.Repository;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

@Repository
public interface TransportRepository extends JpaRepository<Transport, Long>, JpaSpecificationExecutor<Transport> {

    List<Transport> findAllByMstiDateBefore(LocalDate currentDate);

    List<Transport> findAllByTechnicalInspectionValidUntilDateBefore(LocalDate currentDate);

    List<Transport> findAllByTachographDateBefore(LocalDate currentDate);

    Optional<Transport> findByRegisterSign(String registerSign);


}
