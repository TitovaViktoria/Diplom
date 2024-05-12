package com.example.primatrans.util;

import com.example.primatrans.model.*;
import jakarta.persistence.criteria.CriteriaBuilder;
import jakarta.persistence.criteria.CriteriaQuery;
import jakarta.persistence.criteria.Predicate;
import jakarta.persistence.criteria.Root;
import org.springframework.data.jpa.domain.Specification;

import java.util.ArrayList;
import java.util.List;

public class TransportSpecification implements Specification<Transport> {

    private final TransportCriteria criteria;

    public TransportSpecification(TransportCriteria criteria) {
        this.criteria = criteria;
    }


    @Override
    public Predicate toPredicate(Root<Transport> root, CriteriaQuery<?> query, CriteriaBuilder criteriaBuilder)
    {
        List<Predicate> predicateList = new ArrayList<>();

        if (criteria.getType() != null) {
            String typeToSearch = "%" + criteria.getType() + "%";
            predicateList.add(
                    criteriaBuilder.like(criteriaBuilder.lower(root.get("type")), typeToSearch.toLowerCase())
            );
        }

        if (criteria.getRegisterSign() != null) {
            predicateList.add(criteriaBuilder.equal(root.get("registerSign"), criteria.getRegisterSign()));
        }


        return criteriaBuilder.and(predicateList.toArray(new Predicate[] {}));
    }
}
