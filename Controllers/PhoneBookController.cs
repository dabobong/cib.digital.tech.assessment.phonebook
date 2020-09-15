using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using cib.digital.tech.assessment.phonebook.Controllers.Service.Model;
using cib.digital.tech.assessment.phonebook.Controllers.Service.Services;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace cib.digital.tech.assessment.phonebook.Controllers
{
    [Route("phoneBooks")]
    public class PhoneBookController : Controller
    {
        private readonly IPhoneBookServices _phoneBookServices;
        public PhoneBookController(IPhoneBookServices  phoneBookServices)
        {
            _phoneBookServices = phoneBookServices;
        }

        public IActionResult Index()
        {
            return View();
        }

        [HttpPost("create")]
        [ProducesResponseType(StatusCodes.Status201Created)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        public async Task<IActionResult> Create([FromBody]PhoneBook phoneBook)
        {
            var result = await _phoneBookServices.Create(phoneBook);
            return CreatedAtAction(nameof(GetAll), result);
        }

        [HttpGet]
        [ProducesResponseType(StatusCodes.Status200OK)]
        public IActionResult GetAll()
        {
            var result = _phoneBookServices.GetAll();
            return Ok(result);
        }
    }
}
