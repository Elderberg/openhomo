package com.banhaus.openhomo.Resource.service;

import com.banhaus.openhomo.Node.exception.NodeAlreadyExistsException;
import com.banhaus.openhomo.Resource.model.Resource;
import com.banhaus.openhomo.Resource.repository.ResourceRepository;
import com.banhaus.openhomo.SimpleNode.service.SimpleNodeServiceImpl;
import com.banhaus.openhomo.exception.OpenHomoCheckedException;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.validation.constraints.NotEmpty;

@Service
public class ResourceServiceImpl implements ResourceService {
    private static final Logger LOGGER = LoggerFactory.getLogger(SimpleNodeServiceImpl.class);

    private final ResourceRepository resourceRepository;

    @Autowired
    ResourceServiceImpl(ResourceRepository resourceRepository) {
        this.resourceRepository = resourceRepository;
    }

    public Resource[] add(@NotEmpty Resource[] resources) throws OpenHomoCheckedException {
        for (Resource resource : resources) {
            if (resourceRepository.existsById(resource.getId())) {
                throw new NodeAlreadyExistsException();
            }
            LOGGER.info("Added resource with id {} to database.", resource.getId());
            resourceRepository.save(resource);
        }
        return resources;
    }
}
