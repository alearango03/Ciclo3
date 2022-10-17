package co.usa.ciclo3.ciclo3.Service;

import co.usa.ciclo3.ciclo3.Model.Audience;
import co.usa.ciclo3.ciclo3.Repository.AudienceRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service

public class AudienceService {
    @Autowired
    private AudienceRepository audienceRepository;

    public List<Audience> getAll(){
        return audienceRepository.getAll();
    }

    public Optional<Audience> getAudience(int id){
        return audienceRepository.getAudience(id);
    }

    public Audience save(Audience audience){
        if (audience.getId()==null){
            return audienceRepository.save(audience);
        }else{
            Optional<Audience> audienceEncontrado = getAudience(audience.getId());
            if (audienceEncontrado.isEmpty()){
                return audienceRepository.save(audience);
            }else{
                return audience;
            }
        }
    }

    public Audience update(Audience audience){
        if (audience.getId()!=null){
            Optional<Audience> audienceEncontrado = getAudience(audience.getId());
            if (!audienceEncontrado.isEmpty()) {
                if (audience.getName() != null) {
                    audienceEncontrado.get().setName(audience.getName());
                }
                if (audience.getOwner() != null) {
                    audienceEncontrado.get().setOwner(audience.getOwner());
                }
                if (audience.getCapacity() != null) {
                    audienceEncontrado.get().setCapacity(audience.getCapacity());
                }
                if (audience.getDescription() != null) {
                    audienceEncontrado.get().setDescription(audience.getDescription());
                }
                if (audience.getCategory() != null) {
                    audienceEncontrado.get().setCategory(audience.getCategory());
                }
                return audienceRepository.save(audienceEncontrado.get());
            }
        }
        return audience;
    }

    public boolean delete(int id){
        Boolean respuesta = getAudience(id).map(elemento ->{
            audienceRepository.delete(elemento);
            return true;
        }).orElse(false);

        return respuesta;
    }
}