package com.banhaus.openhomo.Resource.service;

import com.banhaus.openhomo.Resource.model.Resource;
import com.banhaus.openhomo.exception.OpenHomoCheckedException;

public interface ResourceService {

    Resource[] add(Resource[] resources) throws OpenHomoCheckedException;
}
