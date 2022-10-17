package co.usa.ciclo3.ciclo3;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@SpringBootApplication//(scanBasePackages = {"com.example.Ciclo3"})
//@EntityScan("com.example.Ciclo3.Model")
//@EnableJpaRepositories("com.example.Ciclo3.Repository")
public class Ciclo3Application {

	public static void main(String[] args) {
		SpringApplication.run(Ciclo3Application.class, args);
	}

}
