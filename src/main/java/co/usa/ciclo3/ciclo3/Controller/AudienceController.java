package co.usa.ciclo3.ciclo3.Controller;

import co.usa.ciclo3.ciclo3.Model.Audience;
import co.usa.ciclo3.ciclo3.Model.Category;
import co.usa.ciclo3.ciclo3.Service.AudienceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = "*", methods = {RequestMethod.GET, RequestMethod.POST, RequestMethod.PUT, RequestMethod.DELETE})
@RestController
@RequestMapping("/api/Audience")

public class AudienceController {
    @Autowired
    private AudienceService audienceService;

    @GetMapping("/all")
    public List<Audience> getAll(){
        return audienceService.getAll();
    }
    @GetMapping("/{id}")
    public Optional<Audience> getAudience(@PathVariable("id") int id) { return audienceService.getAudience(id); }

    @PostMapping("/save")
    @ResponseStatus(HttpStatus.CREATED)
    public Audience save(@RequestBody Audience audience) { return audienceService.save(audience); }

    @PutMapping("/update")
    @ResponseStatus(HttpStatus.CREATED)
    public Audience update (@RequestBody Audience audience){
        return audienceService.update(audience);
    }

    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public boolean delete(@PathVariable("id") int id){
        return audienceService.delete(id);
    }
}

