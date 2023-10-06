package com.example.demo;

public interface Calculate {
    public static double add(String left, String right) {
		return Double.parseDouble(left) + Double.parseDouble(right);
	}

	public static double subtract(String left, String right) {
		return Double.parseDouble(left) - Double.parseDouble(right);
	}

	public static double multiply(String left, String right) {
		return Double.parseDouble(left) * Double.parseDouble(right);
	}

}
