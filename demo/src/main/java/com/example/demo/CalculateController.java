package com.example.demo;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/calculate")
public class CalculateController implements Calculate {

	@GetMapping("/add")
	public ResponseEntity<String> add(@RequestParam(value = "num1", required = true) String num1,
			@RequestParam(value = "num2", required = true) String num2) {
			return ResponseEntity.ok(Double.toString(Calculate.add(num1, num2)));
		
	}

	@GetMapping("/subtract")
	public ResponseEntity<String> subtract(@RequestParam(value = "num1", required = true) String num1,
			@RequestParam(value = "num2", required = true) String num2) {
			return ResponseEntity.ok(Double.toString(Calculate.subtract(num1, num2)));	 
	}

	@GetMapping("/multiply")
	public ResponseEntity<String> multiply(@RequestParam(value = "num1", required = true) String num1,
			@RequestParam(value = "num2", required = true) String num2) {
		
			return ResponseEntity.ok(Double.toString(Calculate.multiply(num1, num2)));
		
	}

}