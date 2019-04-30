package com.boot;

import static org.hamcrest.CoreMatchers.is;
import static org.junit.Assert.assertThat;
import static org.mockito.Mockito.when;

import org.junit.Before;
import org.junit.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;

import com.boot.controller.ShipwreckController;
import com.boot.model.Shipwreck;
import com.boot.repository.ShipwreckRepository;

public class ShipwreckControllerTest {

	@InjectMocks
	private ShipwreckController sc;
	
	@Mock
	private ShipwreckRepository ShipwreckRepository;
	
	@Before
	public void init() {
		MockitoAnnotations.initMocks(this);
	}
	
	@Test
	public void testShipwreckGet() {
		
		Shipwreck sw = new Shipwreck();
		sw.setId(1l);
		when(ShipwreckRepository.findOne(1l)).thenReturn(sw);
		
		Shipwreck wreck = sc.get(1L);
		//assertEquals(1l, wreck.getId().longValue());
		assertThat(wreck.getId(), is(1l));
	}
}
