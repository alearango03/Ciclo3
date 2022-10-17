package co.usa.ciclo3.ciclo3.Repository.crudRepository;

import co.usa.ciclo3.ciclo3.Model.Message;
import org.springframework.data.repository.CrudRepository;

public interface MessageCrudRepository extends CrudRepository<Message, Integer> {
}